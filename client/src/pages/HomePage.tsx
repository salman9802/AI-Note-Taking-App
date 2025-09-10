import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import type { Note } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { useAuthApi } from "@/lib/hooks";
import Loader from "@/components/Loader";
import { Search } from "lucide-react";

const defaultNewNote = {
  showPrompt: false,
  title: "",
  content: "",
};

const HomePage = () => {
  const { user } = useAuth();
  const authApi = useAuthApi();

  const [notes, setNotes] = React.useState<Note[]>([]);
  const [newNote, setNewNote] = React.useState<
    Omit<Note, "id" | "noteTags"> & {
      showPrompt: boolean;
    }
  >(defaultNewNote);
  const [loadingNotes, setLoadingNotes] = React.useState(false);
  const [noteTitle, setNoteTitle] = React.useState("");

  const navigate = useNavigate();

  const createNote = async () => {
    if (newNote.title.length === 0 || newNote.content.length === 0) return;

    (async () => {
      try {
        const res = await authApi.post("/user/note", {
          title: newNote.title,
          content: newNote.content,
        });
        const note = res.data.note as Note;
        setNotes((notes) => [...notes, note]);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message || "Something went wrong");
        } else {
          alert("Something went wrong");
        }
      }
    })();

    setNewNote(defaultNewNote);
  };

  const logout = async () => {
    try {
      await authApi.delete("/user/logout");
      alert("Logout successful");
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message || "Something went wrong");
      } else {
        alert("Something went wrong");
      }
    }
  };

  /** useEffect to load notes */
  React.useEffect(() => {
    (async () => {
      try {
        setLoadingNotes(true);
        const res = await authApi.get("/user/note");
        const notes = res.data.notes as Note[];
        setNotes(notes);
        setLoadingNotes(false);
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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="flex flex-col sm:flex-row sm:gap-3">
          <span className="text-lg font-semibold sm:text-2xl">Welcome,</span>
          <span className="self-end text-sm text-primary">
            {user?.email || "Guest"}
          </span>
        </h1>

        <Button onClick={logout} variant="outline">
          Logout
        </Button>

        <ModeToggle />
      </header>

      {/* Notes Grid */}
      <main className="container mx-auto flex-1 p-4">
        <div className="flex items-center justify-between gap-3">
          <Input
            placeholder="Search note by title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <button>
            <Search className="size-5" />
          </button>
        </div>
        <h1 className="my-6 text-3xl font-semibold md:text-4xl">Notes</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {/* Plus (Create Note) Card */}

          {/* <Card className="aspect-square flex h-auto flex-col">
            <CardContent className="p-4 space-y-2 flex-1">
              <h2 className="text-base font-medium">+</h2>
            </CardContent>
          </Card> */}

          <Dialog
            open={newNote.showPrompt}
            onOpenChange={(open) =>
              setNewNote((prev) => ({ ...prev, showPrompt: open }))
            }
          >
            <DialogTrigger asChild>
              {/* <Card className="flex items-center justify-center border-dashed hover:border-primary hover:text-primary transition-colors cursor-pointer">
                <CardContent className="flex items-center justify-center p-0 h-full w-full text-4xl font-light">
                  <span className="text-3xl font-bold">+</span>
                </CardContent>
              </Card> */}

              <Card className="flex aspect-square cursor-pointer flex-col items-center justify-center border-dashed transition-colors hover:border-primary hover:text-primary">
                <CardContent className="flex flex-1 items-center justify-center p-0 text-4xl font-bold">
                  +
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create a new note</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <Input
                  placeholder="Note title"
                  value={newNote.title}
                  onChange={(e) =>
                    setNewNote((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
                <Textarea
                  placeholder="Note content"
                  value={newNote.content}
                  onChange={(e) =>
                    setNewNote((prev) => ({ ...prev, content: e.target.value }))
                  }
                />
              </div>
              <DialogFooter>
                <Button onClick={createNote}>Add Note</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Render Notes */}
          {loadingNotes ? (
            <Loader className="size-1/2" />
          ) : (
            notes
              .filter((note) => note.title.includes(noteTitle))
              .map((note, i) => (
                <Link
                  key={i}
                  to={`/note/${note.id}`}
                  className="inline-block h-full"
                >
                  <Card className="flex h-full flex-col">
                    <CardContent className="flex-1 space-y-2 p-4">
                      <h2 className="text-base font-medium">{note.title}</h2>
                      <p className="line-clamp-3 text-sm text-muted-foreground">
                        {note.content}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
