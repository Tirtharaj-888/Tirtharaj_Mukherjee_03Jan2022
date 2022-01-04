const request = require('request');
const cheerio = require('cheerio');

// var translator = $('body').translate({lang: "en", t: dict});
request('https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020', (error, response, HTML) => 
  {
  if(!error && response.statusCode == 200){
    const $ = cheerio.load(HTML)

    $('.field.field--name-field-icone.field--type-image.field--label-hidden.field__item a').each((j, el) => 
      {
      const link = $(el).attr('href');
      console.log(link);
      }
      )

    const abc = $('.field-content p:first');
    console.log('Object:', abc.text())

    const pub_date = $('span.col-sm-6.lbl-licitacao')
    console.log(pub_date.text())

  }
    });
