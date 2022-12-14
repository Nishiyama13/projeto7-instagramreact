import Post from "./Post";

export default function Posts() {
  const dataPost = [
    {
      nomeUsuario: "meowed",
      imagemUsuario: "/assets/img/meowed.svg",
      imagemConteudo: "/assets/img/gato-telefone.svg",
      imagemLikeUsuario: "/assets/img/respondeai.svg",
      likeUsuario: "respondeai",
      likes: 101523,
    },
    {
      nomeUsuario: "barked",
      imagemUsuario: "/assets/img/barked.svg",
      imagemConteudo: "/assets/img/dog.svg",
      imagemLikeUsuario: "/assets/img/adorable_animals.svg",
      likeUsuario: "adorable_animals",
      likes: 99159,
    },
  ];
  return (
    <>
      <div className="posts">
        {dataPost.map(item => (
          <Post
            key={item.imagemConteudo}
            nomeUsuario={item.nomeUsuario}
            imagemUsuario={item.imagemUsuario}
            imagem={item.imagemConteudo}
            imagemLikeUsuario={item.imagemLikeUsuario}
            likeUsuarioName={item.likeUsuario}
            likes={item.likes}
          />
        ))}
      </div>
    </>
  );
}
