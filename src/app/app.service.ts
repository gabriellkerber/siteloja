import { Injectable } from '@angular/core';
import { Ssd, } from './models/ssd.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dados: Ssd  [] = [
    new Ssd("Processador AMD 2950X","Com esse processador inovador e incrível "+
    "você desfruta ao máximo o verdadeiro potencial do seu computador. Com 16 núcleos "+
    "oferecem 16 threads que garantem a eficiência e desempenho seja trabalhando, jogando,"+
    " navegando ou assistindo o seu filme preferido, com esse processador você pode tudo!",
    "Processador AMD Ryzen Threadripper 2950X, Cache 32MB, 3.5GHz (4.4GHz Max Turbo), sTR4, Sem Vídeo - YD295XA8AFWOF ", "4899,90", 
     "https://images5.kabum.com.br/produtos/fotos/102505/processador-amd-ryzen-threadripper-2950x-cache-32mb-3-5ghz-4-4ghz-max-turbo-str4-yd295xa8afwof_processador-amd-ryzen-threadripper-2950x-cache-32mb-3-5ghz-4-4ghz-max-turbo-str4-yd295xa8afwof_1562187173_gg.jpg"),

    new Ssd("HD 1TB","Melhore o desempenho do seu computador com o disco rígido Seagate, para que você possa"+
    " armazenar todas as suas informações com facilidade e segurança.O armazenamento que você precisa."+
    " Aproveite ao máximo sua capacidade de 1 TB, a qual lhe permitirá salvar um grande número de documentos,"+
    " filmes, músicas e todos os arquivos necessários. Por sua vez, com seus 128 MB de cache de dados, "+
    "você poderá acessar aos arquivos mais recentes mais rapidamente.Mais velocidade a seu alcance."+
    " Sua interface SATA III permitirá maior velocidade, uso e eficiência ao transferir dados.","Hard Disk 1TB Seagate", "330,00", "https://netcomputadores.com.br/dbimg/produtos/st1000lm048_41091_m.jpg"),
 
    new Ssd("Monitor AOC 21,5'","Conexão DisplayPort: Seu desempenho vai alcançar níveis que você nunca viu antes."+
    " Shadow Control: O melhor contraste para não perder nenhum detalhe. Flicker Free: Regula "+
    "o brilho com iluminação de corrente contínua para reduzir a cintilação da tela. Reduz em mais "+
    "de 90% a emissão de ondas curtas de luz azul da tela que são prejudiciais ao olho humano, sem"+
    " prejudicar as cores do jogo. Com a taxa de atualização de imagem de 75 Hz, você fica sempre à"+
    " frente, sem borrões na tela, serrilhados ou ?efeito fantasma?. Tenha a experiência de jogar sem"+
    " tremores, sem rastros e sem atrasos. A tecnologia AMD FreeSync traz um gaming contínuo e"+
    " totalmente livre de interferência, independente da taxa de quadro. O fim de imagens puladas"+
    " e quadros tremidos. O começo de uma nova experiência.","Monitor Gamer AOC Speed LED 21.5´ "+
    "Widescreen, Full HD, HDMI/VGA/Display Port, FreeSync, 1ms - G2260VWQ6 ", "710,00", "https://images8.kabum.com.br/produtos/fotos/73688/73688_index_gg.jpg"),
    
    new Ssd("SSD 480","Com o disco sólido Kingston você aumentará a capacidade de resposta do seu "+
    "dispositivo. Invista em velocidade e eficiência para inicialização, carregamento e a transferência "+
    "de dados.O armazenamento que você precisa. Aproveite ao máximo sua capacidade de 480 GB, a qual "+
    "lhe permitirá salvar um grande número de documentos, filmes, músicas e todos os arquivos necessários. "+
    "Mais velocidade a seu alcance. Sua interface SATA III permitirá maior velocidade, uso e eficiência "+
    "ao transferir dados.","Solid State Drive 480g Kingston", "460,00", "https://http2.mlstatic.com/D_NQ_NP_877053-MLA40177545694_122019-O.webp"),
    
    new Ssd("Roteador D-link","Mais antenas, mais cobertura e antenas de alta potência para fornecer"+
    " cobertura de sinal Wi-Fi de alta qualidade em sua casa ou escritório.Filmes e jogos Online, com "+
    "o DIR-825 assista filmes através de sua Smart TV ao mesmo tempo que seu filho joga na rede sem"+
    " interrupções. Dual Band. Bandas de rede Wi-Fi diferentes para necessidades distintas. Faça mais,"+
    " conecte com mais performance e menos interferência.","Roteador D-Link Gigabit AC 1200Mbps, 4 Antenas "+
    "- DIR-825", "260,00", "https://images5.kabum.com.br/produtos/fotos/101115/101115_1553513717_index_gg.jpg"),
    
    new Ssd("RTX 2070 Super","O sistema de refrigeração WINDFORCE 3X possui ventiladores de lâmina "+
    "exclusivos de 3x 82 mm, ventilador alternativo, 5 tubos de calor de cobre composto, toque direto "+
    "do tubo de calor e funcionalidade de ventilador ativo 3D, oferecendo juntos uma capacidade efetiva "+
    "de dissipação de calor para obter um desempenho superior em temperaturas mais baixas.O GIGABYTE"+
    " “Alternate Spinning” é a única soluç;ão que pode resolver o turbulento fluxo de ar de três ventiladores."+
    " O maior problema com os três fãs é a turbulência. Como os ventiladores giram na mesma direção,"+
    " a direção do fluxo de ar é; oposta entre os ventiladores, o que causará; um fluxo de ar turbulento e reduzirá"+
    " a eficiê;ncia da dissipação de calor.A GIGABYTE gira o ventilador do meio na direção oposta,"+
    " para que a direção do fluxo de ar entre os dois seja a mesma, reduzindo a turbulência e aumentando"+
    " a pressão do fluxo de ar.","Placa de Vídeo Gigabyte NVIDIA GeForce RTX 2070 Super Windforce 3X, 8GB, GDDR6 - GV-N207SWF3-8GD ", "3499,90", "https://images3.kabum.com.br/produtos/fotos/109803/placa-de-video-gigabyte-nvidia-geforce-rtx-2070-super-windforce-3x-8gb-gddr6-gv-n207swf3-8gd_1580392687_gg.jpg"),
  ];

  constructor() {
  }


}
