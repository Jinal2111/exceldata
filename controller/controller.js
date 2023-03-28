const xlsx = require('xlsx');
const studentmodel = require('../model/student');

exports.student = async (req, res) => {
    try{
        const excel = xlsx.readFile('./studentdata.xlsx', { sheetRows : 4 });
        const data = xlsx.utils.sheet_to_json(excel.Sheets['Sheet1']);
        console.log(data);
        data.forEach(async (i) => {
            const student = new studentmodel(i);
            await student.save();
        })
        res.status(200).send("data successfully added in database");
    }
    catch (err) {
        res.status(500).send("something went wrong..")
    }
}