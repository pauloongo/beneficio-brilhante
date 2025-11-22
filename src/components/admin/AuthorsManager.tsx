import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Author {
  id: string;
  name: string;
  bio: string;
  credentials?: string;
  photo_url?: string;
}

const AuthorsManager = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState<Author | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    credentials: "",
    photo_url: "",
  });

  const queryClient = useQueryClient();

  const { data: authors, isLoading } = useQuery({
    queryKey: ["admin-authors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("authors")
        .select("*")
        .order("name");
      
      if (error) throw error;
      return data as Author[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (newAuthor: typeof formData) => {
      const { error } = await supabase.from("authors").insert(newAuthor);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-authors"] });
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast.success("Autor criado!");
      resetForm();
    },
    onError: () => toast.error("Erro ao criar autor"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Author>) => {
      const { error } = await supabase
        .from("authors")
        .update(updates)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-authors"] });
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast.success("Autor atualizado!");
      resetForm();
    },
    onError: () => toast.error("Erro ao atualizar autor"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("authors").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-authors"] });
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast.success("Autor excluído!");
    },
    onError: () => toast.error("Erro ao excluir autor"),
  });

  const resetForm = () => {
    setFormData({
      name: "",
      bio: "",
      credentials: "",
      photo_url: "",
    });
    setEditingAuthor(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (author: Author) => {
    setEditingAuthor(author);
    setFormData({
      name: author.name,
      bio: author.bio,
      credentials: author.credentials || "",
      photo_url: author.photo_url || "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAuthor) {
      updateMutation.mutate({ id: editingAuthor.id, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gerenciar Autores</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsDialogOpen(true); }}>
              <Plus className="mr-2 h-4 w-4" />
              Novo Autor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingAuthor ? "Editar Autor" : "Novo Autor"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="João Silva"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="credentials">Credenciais / Título</Label>
                <Input
                  id="credentials"
                  value={formData.credentials}
                  onChange={(e) => setFormData({ ...formData, credentials: e.target.value })}
                  placeholder="Especialista INSS Certificado - 12 anos de experiência"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Biografia</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  placeholder="Descreva a experiência e qualificações do autor..."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photo_url">URL da Foto</Label>
                <Input
                  id="photo_url"
                  value={formData.photo_url}
                  onChange={(e) => setFormData({ ...formData, photo_url: e.target.value })}
                  placeholder="https://exemplo.com/foto.jpg"
                />
                <p className="text-xs text-muted-foreground">
                  Cole a URL de uma foto do autor (Unsplash, por exemplo)
                </p>
              </div>
              <div className="flex gap-2 pt-4 border-t">
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {editingAuthor ? "Atualizar" : "Criar"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="text-center py-12">Carregando...</div>
      ) : (
        <div className="grid gap-4">
          {authors?.map((author) => (
            <Card key={author.id}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={author.photo_url || ""} alt={author.name} />
                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle>{author.name}</CardTitle>
                    {author.credentials && (
                      <CardDescription className="mt-1">
                        {author.credentials}
                      </CardDescription>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(author)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      if (confirm("Tem certeza que deseja excluir este autor?")) {
                        deleteMutation.mutate(author.id);
                      }
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{author.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorsManager;