import custoJson from '../custoJson.json'


export function JSON() {
    const fazendaAlvorada = custoJson.map( data => data.fazenda_id === 35 ) // Fazenda Alvorada

    // const fazendaConquista = custoJson.map( data => data.fazenda_id === 34 ) // Fazenda da Conquista

    const servicosFazendaAlborada = fazendaAlvorada.map( data => data.servicos)

    console.log(servicosFazendaAlborada) 

}