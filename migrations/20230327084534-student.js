module.exports = {
  async up(db, client) {
    await db.createCollection('details');
    // await db.collection('details').insertOne({
    //   Name : "jinal",
    //   Surname : "mathukiya",
    //   Mark : 56,
    //   Result : "pass",
    //   Age : 32
    // })
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
