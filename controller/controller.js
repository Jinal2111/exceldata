const xlsx = require('xlsx');
const studentmodel = require('../model/student');

exports.student = async (req, res) => {
    try{
        const excel = xlsx.readFile('./studentdata.xlsx');
        const data = xlsx.utils.sheet_to_json(excel.Sheets['Sheet1']);
        data.forEach(async (i) => {
            const student = new studentmodel(i);
            await student.save();
        })
        res.status(200).send("data successfully store in database");
    }
    catch (err) {
        res.status(500).send("something went wrong..")
    }
}