import React from "react";

import { Copy, X } from "lucide-react";
import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthApi } from "@/lib/hooks";
import type { Note, NoteTag } from "@/lib/types";
import axios from "axios";

const AiSummaryButton = ({
  className,
  summary,
  ...props
}: React.ComponentProps<"button"> & {
  summary: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [copy, setCopy] = React.useState<"idle" | "copied" | "failed">("idle");

  const copySummary = () => {
    try {
      navigator.clipboard
        .writeText(summary)
        .then(() => {
          setCopy("copied");
          setTimeout(() => setCopy("idle"), 3000);
        })
        .catch(() => {
          setCopy("failed");
          setTimeout(() => setCopy("idle"), 3000);
        });
    } catch (error) {
      setCopy("failed");
      setTimeout(() => setCopy("idle"), 3000);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={(open) => setOpen(open)}>
      {/* <button */}
      <AlertDialogTrigger
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 active:scale-95",
          className,
        )}
        {...props}
      >
        <Sparkles className="h-4 w-4" />
        AI Summary
        {/* </button> */}
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col justify-center gap-6">
        <h1 className="text-3xl">💥 AI Summary</h1>

        {summary.length === 0 ? (
          <div className="flex flex-col gap-3">
            <div className="h-[1ch] w-full animate-pulse rounded-full bg-gray-300"></div>
            <div className="h-[1ch] w-full animate-pulse rounded-full bg-gray-300"></div>
            <div className="h-[1ch] w-full animate-pulse rounded-full bg-gray-300"></div>
            <div className="h-[1ch] w-full animate-pulse rounded-full bg-gray-300"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {summary.split(/\n+/).map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

        <AlertDialogFooter>
          <AlertDialogAction>Close</AlertDialogAction>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={copySummary}
          >
            <Copy />{" "}
            <span>
              {copy === "failed" ? (
                <span className="text-red-500">Couldn't copy</span>
              ) : copy === "copied" ? (
                <span className="text-theme-text/70 text-sm">
                  Copied to clipboard
                </span>
              ) : (
                "Copy Summary"
              )}
            </span>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const AiTagsButton = ({
  acceptTags,
  className,
  tags,
  ...props
}: React.ComponentProps<"button"> & {
  acceptTags: () => void;
  tags: string[];
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {/* <button */}
      <AlertDialogTrigger
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-orange-500 via-rose-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 active:scale-95"
        {...props}
      >
        <Sparkles className="h-4 w-4" />
        AI Tags
        {/* </button> */}
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col justify-center gap-6">
        <h1 className="text-3xl">AI Tags</h1>

        {tags.length === 0 ? (
          <div className="flex flex-wrap gap-3">
            <div className="h-[1lh] w-[10ch] animate-pulse rounded-full bg-gray-300 md:w-[15ch]"></div>
            <div className="h-[1lh] w-[10ch] animate-pulse rounded-full bg-gray-300 md:w-[15ch]"></div>
            <div className="h-[1lh] w-[10ch] animate-pulse rounded-full bg-gray-300 md:w-[15ch]"></div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <div key={i} className="font-semibold">
                {tag}
              </div>
            ))}
          </div>
        )}

        <AlertDialogFooter>
          <AlertDialogAction>Close</AlertDialogAction>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
              acceptTags();
            }}
          >
            Accept all ({tags.length})
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const AiImproveButton = ({
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-emerald-500 via-lime-500 to-yellow-400 px-4 py-2 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 active:scale-95"
      aria-label="AI Assist"
      {...props}
    >
      <Sparkles className="h-5 w-5" />
      AI Improve
    </button>
  );
};

const NotePage = () => {
  const { noteId } = useParams();

  const [editing, setEditing] = React.useState(false);
  const [showAiImproved, setShowAiImproved] = React.useState(false);
  const [note, setNote] = React.useState<Omit<Note, "id">>({
    title: "",
    content: "",
    noteTags: [],
  });
  const [generatedTags, setGeneratedTags] = React.useState<string[]>([]);
  const [generatedSummary, setGeneratedSummary] = React.useState("");
  const [improvedContent, setImprovedContent] = React.useState("");

  const navigate = useNavigate();
  const authApi = useAuthApi();

  const updateNote = () => {
    (async () => {
      try {
        const res = await authApi.put(`/user/note/${noteId}`, note);
        const updatedNote = res.data.note as Note;
        setNote(updatedNote);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      } finally {
        setEditing(false);
      }
    })();
  };

  const deleteNote = () => {
    (async () => {
      try {
        await authApi.delete(`/user/note/${noteId}`);
        alert("Note deleted successfully");
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();
  };

  const removeTag = (tagId: string) => {
    (async () => {
      try {
        await authApi.delete(`/user/note/${noteId}/tag/${tagId}`);
        // console.log("res.data", res.data);
        // const updatedNote = res.data.note as Note;
        // setNote(updatedNote);
        setNote((n) => ({
          ...n,
          noteTags: n.noteTags?.filter((tag) => tag.id !== tagId),
        }));
        alert("Delete successfully");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();
  };

  const generateAiSummary = () => {
    (async () => {
      try {
        const res = await authApi.get(`/user/note/${noteId}/summary`);
        setGeneratedSummary(res.data.summary as string);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();
  };

  const aiImprove = () => {
    (async () => {
      try {
        const res = await authApi.get(`/user/note/${noteId}/improve`);
        setImprovedContent(res.data.improved as string);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();
    setShowAiImproved(true);
  };

  const acceptImproved = () => {
    (async () => {
      try {
        console.log(generatedSummary);
        await authApi.put(`/user/note/${noteId}`, {
          content: improvedContent,
        });
        setNote((n) => ({ ...n, content: generatedSummary }));
        setGeneratedSummary("");
        alert("Accepted");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data.message);
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();
  };

  const generateAiTags = () => {
    (async () => {
      try {
        const res = await authApi.get(`/user/note/${noteId}/tags`);
        setGeneratedTags(res.data.tags as string[]);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();
  };

  const acceptGeneratedTags = () => {
    (async () => {
      try {
        const res = await authApi.post(`/user/note/${noteId}/tag`, {
          tags: generatedTags,
        });
        const tags = res.data.tags as NoteTag[];
        setNote((n) => ({ ...n, noteTags: [...n.noteTags, ...tags] }));
        alert("Tags added");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data.message);
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();
  };

  /** useEffect to fetch note data */
  React.useEffect(() => {
    (async () => {
      try {
        const res = await authApi.get(`/user/note/${noteId}`);
        const note = res.data.note as Note;
        setNote(note);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();
  }, []);

  return (
    <div className="container mx-auto my-6 flex flex-col gap-6 p-3 lg:my-12 lg:gap-12">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">
          {editing ? (
            <Input
              className="h-auto text-3xl! leading-10!"
              value={note?.title}
              onChange={(e) => {
                setNote((note) => ({ ...note, title: e.target.value }));
              }}
            />
          ) : (
            note?.title
          )}
        </h1>
        <div className="flex flex-wrap gap-3">
          {note?.noteTags &&
            note.noteTags.map((tag) => (
              <Badge
                key={tag.id}
                variant="default"
                onClick={() => removeTag(tag.id)}
              >
                {tag.name} <X className="z-50 cursor-pointer" />
              </Badge>
            ))}
        </div>
        {!editing && (
          <div className="flex flex-wrap items-center gap-3">
            <AiSummaryButton
              summary={generatedSummary}
              onClick={generateAiSummary}
            />
            <AiImproveButton onClick={aiImprove} />
            <AiTagsButton
              tags={generatedTags}
              acceptTags={acceptGeneratedTags}
              onClick={generateAiTags}
            />
          </div>
        )}
      </div>

      {/* AI improve content */}
      {showAiImproved && (
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl lg:text-4xl">
              Improved by AI ✨
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {improvedContent.length === 0 ? (
              <div className="flex flex-col gap-3">
                <div className="h-4 w-full animate-pulse rounded-full bg-gray-300"></div>
                <div className="h-4 w-full animate-pulse rounded-full bg-gray-300"></div>
                <div className="h-4 w-full animate-pulse rounded-full bg-gray-300"></div>
                <div className="h-4 w-full animate-pulse rounded-full bg-gray-300"></div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {improvedContent.split(/\n+/).map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}

            <div className="flex items-center justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setShowAiImproved(false)}
              >
                Cancel
              </Button>
              <Button onClick={acceptImproved}>Accept</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Content */}
      <div className="flex flex-col gap-1.5 lg:gap-3">
        {editing ? (
          <Textarea
            className="text-lg!"
            value={note?.content}
            onChange={(e) => {
              setNote((note) => ({ ...note, content: e.target.value }));
            }}
          />
        ) : (
          note?.content.split("\n").map((line, i) => (
            <p className="text-lg" key={i}>
              {line}
            </p>
          ))
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 lg:gap-6">
        {editing ? (
          <>
            <Button
              onClick={() => setEditing(false)}
              className="cursor-pointer"
              variant="default"
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={() => updateNote()}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <Dialog>
              {/* <DialogTrigger> */}
              <Button
                onClick={deleteNote}
                className="cursor-pointer"
                variant="destructive"
              >
                Delete
              </Button>
              {/* </DialogTrigger> */}
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Are you sure you want to delete the note?
                  </DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Continue</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={() => setEditing(true)}
            >
              Edit
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default NotePage;
