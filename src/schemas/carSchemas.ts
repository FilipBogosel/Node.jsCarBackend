export const addCarSchema = {
    body: {
        type: 'object',
        required: ['model', 'category', 'engine_power', 'fuel', 'manufacture_year', 'price'],
        properties: {
            model: {type: 'string', minLength: 1},
            category: {type: 'string', minLength: 1},
            engine_power: {type: 'integer', minimum: 0},
            fuel: {type:'string', minLength:1},
            manufacture_year: {type:'integer', minimum:1900, maximum: new Date().getFullYear()},
            price: {type:'number', minimum:0},
            color: {type: 'string'},
            history: {type: 'string'},
            rating: {type: 'integer', minimum: 0, maximum: 10}
        }
    }
};


export const updateCarSchema = {
    body: {
        type:'object',
        required: ['id','price','color','engine_power','rating'],
        properties: {
            id: {type:'integer'},
            price : {type:'number', minimum:0},
            color: {type: 'string'},
            engine_power: {type: 'integer', minimum: 0},
            rating: {type: 'integer', minimum: 0, maximum: 10}
        }
    }
};

export const loginSchema = {
    body: {
        type:'object',
        required:['username','password'],
        properties:{
            username: {type:'string', minLength:1},
            password: {type:'string', minLength:1}
        }
    }
}