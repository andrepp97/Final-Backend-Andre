const express = require('express')
const { sqlDB } = require('../database')

module.exports = {
    categoryList: (req,res) => {
        let sql = `SELECT id, Nama FROM category`
        sqlDB.query(sql, (err,results) => {
            if(err) return res.status(500).send(err)

            res.status(200).send(results)
        })
    },

    addCategory: (req,res) => {
        let sql = `INSERT INTO category SET ?`
        sqlDB.query(sql, req.body, (err,results) => {
            if(err) return res.status(500).send(err)

            res.status(200).send('Insert Berhasil')
        })
    },

    editCategory: (req,res) => {
        let sql = `UPDATE category SET ? WHERE id = ${req.body.id}`
        sqlDB.query(sql, req.body, (err,results) => {
            if(err) return res.status(500).send(err)

            res.status(200).send('Update Berhasil')
        })
    },

    deleteCategory: (req,res) => {
        let sql = `DELETE FROM category WHERE id = ${req.body.id}`
        sqlDB.query(sql, (err,results) => {
            if(err) return res.status(500).send(err)

            let sql2 = `DELETE FROM movcat WHERE idcategory = ${req.body.id}`
            sqlDB.query(sql2, (err, results) => {
                if (err) return res.status(500).send(err)

                res.status(200).send('Delete Berhasil')
            })
        })
    }
}