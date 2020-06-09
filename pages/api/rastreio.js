// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//https://api-rastrei-correios.herokuapp.com/

export default (req, res) => {
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ objeto:{numero:"xxxx",erro:"em andamento"}}))
  }