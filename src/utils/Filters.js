class Filters {

    constructor(reqQuery, mongoQuery) {
        // initialization 
        this.reqQuery = reqQuery;
        this.mongoQuery = mongoQuery
    }

    filter(){
        const myQuery =  { ...this.reqQuery };

        // excluding common fields
        const excludeFields = ['sort', 'page', 'pageSize', 'fields']
        excludeFields.forEach(field => delete myQuery[field])

        //replacing the operators 
        let queryStr = JSON.stringify(myQuery);
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, (matchedValue) => "$"+matchedValue)
        // queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)

        this.mongoQuery = this.mongoQuery.find(JSON.parse(queryStr))

        return this;
    }

    sort() {
        if(this.reqQuery.sort) {
            // joining sorted fields with spaces
            const sort = this.reqQuery.sort.split(",").join(" ")
            this.mongoQuery = this.mongoQuery.sort(sort);
        }
        return this
    }

    selectFields() {
        if(this.reqQuery.fields) {
            // joining fields with spaces
            const fields = this.reqQuery.fields.split(",").join(" ")
            this.mongoQuery = this.mongoQuery.select(fields);
        }
        return this
    }

    paginate() {

        // logic for pagination
        // limit the number of results
        // pageSize --> number of results in one page

        // if pageSize is 10
        // page 2 -> skip 10 results
        // page 3 -> skip 20 results
        // page 4 -> skip 30 results

        // if pageSize is 20
        // page 2 -> skip 20 results // pageSize * (page - 1)
        // page 5 -> skip 80 results

        const pageSize = this.reqQuery.pageSize * 1 || 20;
        const page = this.reqQuery.page * 1 || 1;
        const skipResults = pageSize * (page - 1);

        this.mongoQuery = this.mongoQuery.skip(skipResults).limit(pageSize);
        return this
    }
}

module.exports = Filters;
