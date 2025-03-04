
import { MyHeader } from "@/Componentes/Header/Header";
import { Carrosel } from "@/Componentes/Carrosel/Carrosel";

export default function Home() {
  return (
    <div>
      <MyHeader />
      <main className="bg-[#e41f25] font-medium text-2xl rounded-2xl  text-white m-12 ">
        <p className="text-center">Pokémon é uma franquia de mídia criada por Satoshi Tajiri e Ken Sugimori, sendo uma das mais populares do mundo. O nome "Pokémon" é derivado de "Pocket Monsters" (Monstros de Bolso, em português), e se refere às criaturas fantásticas que os jogadores capturam, treinam e batalham. A franquia abrange uma série de jogos, anime, cartas colecionáveis, filmes e outros produtos de merchandising, com o objetivo principal de capturar, treinar e batalhar com Pokémon. <br />
          Os jogos Pokémon são principalmente RPGs (Role-Playing Games) onde os jogadores assumem o papel de um treinador de Pokémon. O objetivo é capturar criaturas chamadas Pokémons, que possuem habilidades especiais e pertencem a diferentes tipos como fogo, água, planta, elétrico, entre outros. Cada Pokémon pode evoluir, se transformando em versões mais poderosas de si mesmos. Ao longo da jornada, o jogador enfrenta outros treinadores e busca se tornar o Mestre Pokémon. A série de jogos começou no Game Boy e continua até hoje em consoles como Nintendo DS e Nintendo Switch.
          O anime Pokémon segue as aventuras de Ash Ketchum, um jovem treinador que viaja pelo mundo com seu Pokémon parceiro, Pikachu, capturando novos Pokémon e enfrentando desafios. O anime ajudou a popularizar a franquia globalmente, tornando personagens como Pikachu extremamente conhecidos e estabelecendo Pokémon como um fenômeno mundial. <br />
          Além dos jogos e do anime, Pokémon também tem um Jogo de Cartas Colecionáveis (TCG), onde os jogadores usam cartas que representam Pokémon e suas habilidades para batalhar uns contra os outros. Esse jogo também gerou uma enorme base de fãs e competições ao redor do mundo.
          A franquia também gerou muitos filmes, spin-offs e uma vasta gama de produtos de merchandising, como brinquedos, roupas, acessórios, entre outros. O Pokémon mais famoso é Pikachu, que é o mascote oficial da franquia. Outros Pokémon populares incluem Bulbasaur, Charmander, Squirtle, e Mewtwo, um Pokémon lendário que apareceu em filmes e se tornou um ícone da franquia.
          O mundo de Pokémon é vasto, com diversas regiões (como Kanto, Johto, Hoenn, Sinnoh, Unova, Galar, entre outras) onde os treinadores podem explorar, capturar novos Pokémon e enfrentar desafios. Cada região apresenta novas espécies de Pokémon e cenários únicos, o que mantém a franquia sempre interessante para os jogadores. <br />
          Em resumo, Pokémon é uma franquia multimídia que envolve jogos, anime, filmes, cartas colecionáveis e muito mais. Com uma enorme base de fãs ao redor do mundo, Pokémon continua sendo uma das franquias mais bem-sucedidas e influentes da história do entretenimento. Seu conceito central de capturar, treinar e batalhar com Pokémon faz com que ela permaneça relevante e amada por fãs de todas as idades.</p>
      </main>
      <Carrosel />
      <main className="bg-[#e41f25] font-medium text-2xl rounded-2xl  text-white m-12 " >
        Muitos Pokémon são inspirados em animais reais, plantas ou mitologia, como Bulbasaur, que se assemelha a um sapo com uma planta nas costas, ou Gyarados, inspirado em um dragão chinês. A franquia também tem raízes em várias culturas, com Ninetales, por exemplo, inspirado na lenda japonesa da raposa de nove caudas.
        A série também fez alterações nos nomes dos Pokémon ao serem traduzidos para diferentes idiomas, como o caso de Eevee, que tem o mesmo nome no Japão e no resto do mundo, mas com uma pronúncia adaptada. Além disso, a franquia gerou uma grande quantidade de mídia e produtos, tornando-se uma das maiores e mais lucrativas do mundo do entretenimento, com jogos, filmes, cartas, brinquedos e até séries de TV.
        Mewtwo, um dos Pokémon mais famosos, foi criado através de engenharia genética e foi central no filme Pokémon: O Filme – Mewtwo Contra-Ataca de 1998. O fenômeno Pokémon Go de 2016, que utilizou a realidade aumentada, trouxe os Pokémon para o mundo real, permitindo que os jogadores os capturassem nas ruas e parques, criando uma comunidade global de jogadores. O jogo tem o maior Pokémon já visto, Eternatus, que atinge impressionantes 20 metros de altura.
        Cada Pokémon possui uma habilidade especial, como Levitate, que faz com que o Pokémon não seja afetado por ataques do tipo Terra. Os Shiny Pokémon, variantes raras de criaturas com cores diferentes, são muito valorizados, já que têm uma chance muito baixa de aparecer – cerca de 1 em 4096.
      </main>
    </div>

  );
}
