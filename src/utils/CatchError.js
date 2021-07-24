
const CatchError = (myLogicalFunction) => {

    // return a middleware req,res,next
    return (req, res, next) => {
        // it shall execute whatever logical function i pass to it 
        //and also catch any error if comes
        myLogicalFunction(req, res, next).catch(err => {
            next(err)
        })
    }

}

module.exports = CatchError
