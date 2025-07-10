como e quando utilizar o "static"?

o construtor precisa sempre estar declarado?

Que relanção deve haver entre a classe e o arquivo?

Como criar uma função com cálculo de segundos?
    1-o contador é em milissecundos e cada 1000ms representam 1 segundo.Cada minuto tem 60s e cada hora tem 60 minutos, então para obtermos o valor segundo em 1 hora fazer 60sX60m=3600s

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
    Para os segundos retiramos o correspontes às horas e minutos e multiplicamos pro 60s:
        a)1000 -(0*3600) - (0,00463*60) = 7
        b)4562 -(1*3600 )- (0,00437*60) = 26


Como gerenciar a  visibilidade dos elementos da classe, fazendo com que objetos "públicos" fiquem "privadas"?

