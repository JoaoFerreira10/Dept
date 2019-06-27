const jsonData = require('./data.json');

class Api {

    static instance = null;

    static getInstance() {

        if(!this.instance)
            this.instance = new Api();

        return this.instance;       
    }

    async getDataContent() {
        return jsonData;
    }

    async getDataContentByIndustryId(industryId) {
        return industryId == 0 ? jsonData : jsonData.filter(val => val.industryId == industryId);
    }
}

export default Api;