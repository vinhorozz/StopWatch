Por que utilizar o "static" em um método?
    Ao criarmos um objeto e seus métodos, esses só podem ser executados com chamadas do próprio objeto. Porém, muitas vezes criaremos funçoes que poderão se utilizadas por outras objeto e até mesmo ser chamada em outros métodos ou módulos, para que esse dinamismo seja dado a essa função, adicionamos a palavra reservada "static" antes do nome do método(função da classe)

O construtor precisa sempre estar declarado?
    o construtor só tem função a cumprir caso existam argumentos que serão passados para serem atribuídos às variáveis.Caso contrário, não precisaremos declarar!

Que relação deve haver entre a classe e o arquivo?
    Por convenção usarmos nomear o arquivo com o mesmo nome da "Classe" que será criada dentro dele, facilitando assim a visualização e resolução de problemas futuros 


Como criar uma função com cálculo de segundos?
    1-o contador é em milissecundos e cada 1000ms representam 1 segundo.Cada minuto tem 60s e cada hora tem 60 minutos, então para obtermos o valor segundo em 1 hora, precisarem fazer o cálculo  60s X 60m=3600s

    2-Agora que obtivémos a base do cálculo, precisamos continuar utilizando o valor que foi gerado no contador para realizarmo um divisão para chegarmos aos valores de horas e minutos!
    Para horas:
        valorsegundos/3600 = horas
    Ex.: a)1000/3600=0,2778...
         b)4562/3600=1,2672..
        Para o resultado das horas, só é interessante os valores inteiros, então desprezamos os decimais;

    Para minutos: 
        o resto da primeira operação é utilizado para realizarmos uma divisão por 60m, agora:
    Ex.: a)0,2778/60=0,00463
         b)0,2672/60=0,00437
        Para o resultado utilizamos também o resultado dos inteiros apenas!
    Para os segundos: 
        retiramos o correspontes às horas e minutos e multiplicamos por 60s:
        a)1000 -(0*3600) - (0,00463*60) = 7
        b)4562 -(1*3600 )- (0,00437*60) = 26


Como gerenciar a visibilidade dos elementos da classe, fazendo com que objetos "públicos" fiquem "privadas"?
    No JavaScript fazemos a utilização de "#" para que elementos como atributos ou métodos não possam ser manipulados por outros objetos; 

    Além disso, é comum utilizar convenções como o sublinhado `_nome` para indicar que um membro deve ser tratado como "protegido" ou "privado", mas isso não impede o acesso externo — é apenas uma convenção

Para que possam fazer manipulação as propriedades do objeto que podem ser protegidas pelo "#", podemos usar os "métodos manipuladores" como .get() e .set(). Eles são funções que realização operações (cálculos, concatenção ou atribuíções...) . O .get() normalmente retornará algum valor solicitado enquanto o .set() realizará a atribuição de um valor à um atributo do objeto, podendo ou não fazer manipulações antes disso!
