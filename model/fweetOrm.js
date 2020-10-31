const {
    insertFweetQuery,
    findAllFweetsQuery,
    findFweetByIdQuery,
    findFweetsByUserQuery,
    deleteFweetByIdQuery,
} = require('./fweetQueries');

const connection = require('../config/connection');

const findFweetByIdFromDb = async(fweetId) => {
    try {
        const [ result ] = await connection.query(findFweetByIdQuery, fweetId);
        return result[0];
    } catch (e) {
        throw new Error(e);
    }
};

const findFweetsByUserFromDb = async (userId) => {
    try {
      const [ result ] = await connection.query(findFweetsByUserQuery, userId);
      return result;
    } catch (e) {
      throw new Error(e);
    }
};
  
const insertFweetToDb = async(fweet, userId) => {
    try {
        const [ result ] = await connection.query(insertFweetQuery, [ fweet, userId ]);
        console.log(result);
    } catch (e) {
        throw new Error(e);
    }
};

const deleteFweetByIdFromDb = async (fweetId) => {
    try {
        // We can't just delete first if we delete first, we can't get the user anymore
        const deletedFweet = await findFweetByIdFromDb(fweeId);
        await connection.query(deleteFweetByIdQuery, fweetId);
        return deletedFweet;
    } catch (e) {
        throw new Error(e);        
    }
};

module.exports = {
  findAllFweetsFromDb,
  findFweetByIdFromDb,
  findFweetsByUserFromDb,
  insertFweetToDb,
  deleteFweetByIdFromDb,
}
