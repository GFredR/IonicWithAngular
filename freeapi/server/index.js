let express = require('express');
let axios = require('axios');

let app = express();

let  options = {
    headers: {
        // 'user-agent:': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
        'cookie': 'device_id=24700f9f1986800ab4fcc880530dd0ed; xq_a_token=176b14b3953a7c8a2ae4e4fae4c848decc03a883; xqat=176b14b3953a7c8a2ae4e4fae4c848decc03a883; xq_r_token=2c9b0faa98159f39fa3f96606a9498edb9ddac60; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYxMzQ0MzE3MSwiY3RtIjoxNjExODgwNTA0NzgxLCJjaWQiOiJkOWQwbjRBWnVwIn0.hZF-BNlwopnx0wZTkerc8GdNMy84N8XGU5vQYmfqEWUs0xwsNBCEQqEfgGGDkqnxEcnij-4CQuhABwHta0UvPrA5gOeRejVKrrzSb7ykX3tWUJFAMSXP-D4O1DMnDcSeLp_8qi9u8SPZk98b1lE-lYFnrQrZkrWDt0kNn-jGhJSYmZHdC3dnp2riXkXaOcRN1FQ77fy62_GjrO3yROQPH6sd81tg0JSRdZa1sl9fkUdSsRBMemyyEN0vc0wZXkPJ47N8Eikf0R72ApwwMHKia_LJjrXz4mkEM6mRCit73N-23FKS6bkbG6yCEAUr0a9iUkbvP-fPUT-mSNOSbJjQ6g; u=461611880530356',
        'accept': 'application/json, text/plain',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        'origin': 'https://xueqiu.com',
        'referer': 'https://xueqiu.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        // 'Access-Control-Allow-Origin': 'https://stock.xueqiu.com',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'credentials': 'include'

    },
}

app.get('/', (req, res) => {
    res.send('apiServer');
});

app.get('/api/index/quote', async (req, res)=>{
    let httpUrl = 'https://stock.xueqiu.com/v5/stock/batch/quote.json?symbol=SH000001,SZ399001,SZ399006,SH000688,HKHSI,HKHSCEI,HKHSCCI,.DJI,.IXIC,.INX'
    let result;
    try {
        result = await axios.get(httpUrl, options);
    } catch (error) {
        console.log(error);
    }
    res.json(result.data);
});

//热股榜
app.get('/api/index/hotStock', async (req, res) => {
    let index = req.query.index ? req.query.index : 12;
    res.setHeader('Access-Control-Allow-Origin','*');
    // res.;
    let httpUrl = 'https://stock.xueqiu.com/v5/stock/hot_stock/list.json?size=8&_type='+index+'&type='+index;
    let result;
    try {
        result = await axios.get(httpUrl, options);
    } catch (e) {
        console.log(e);
    }
    res.json(result.data);
    console.log(result.data)
});

//推荐
app.get('/api/index/news', async (req, res) => {
    let httpUrl = 'https://xueqiu.com/statuses/livenews/list.json?since_id=-1&max_id=-1&count=15';
    let result;
    try {
        result = await axios.get(httpUrl, options);
    } catch (e) {
        console.log(e);
    }
    res.json(result.data);
})
//24*7
app.get('/api/index/day', async (req, res) => {
    let httpUrl = 'https://xueqiu.com/statuses/hot/listV2.json?since_id=-1&max_id=-1&size=15';
    let result;
    try {
        result = await axios.get(httpUrl, options);
    } catch (e) {
        console.log(e);
    }
    res.json(result.data);
})

app.listen(8080, () => {
    console.log('server start:','http://localhost:8080');
})













