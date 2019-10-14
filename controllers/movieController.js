const express = require('express')
const { sqlDB } = require('../database')

module.exports = {
    movieList: (req,res) => {
        let sql = `SELECT id, Nama, Tahun, Description FROM movies`
        sqlDB.query(sql, (err,results) => {
            if(err) return res.status(500).send(err)

            res.status(200).send(results)
        })
    },

    addMovie: (req,res) => {
        let sql = `INSERT INTO movies SET ?`
        sqlDB.query(sql, req.body, (err,results) => {
            if(err) return res.status(500).send(err)

            res.status(200).send('Insert Berhasil')
        })
    },

    editMovie: (req,res) => {
        let sql = `UPDATE movies SET ? WHERE id = ${req.body.id}`
        sqlDB.query(sql, req.body, (err,results) => {
            if(err) return res.status(500).send(err)

            res.status(200).send('Update Berhasil')
        })
    },

    deleteMovie: (req,res) => {
        let sql = `DELETE FROM movies WHERE id = ${req.body.id}`
        sqlDB.query(sql, (err,results) => {
            if(err) return res.status(500).send(err)

            let sql2 = `DELETE FROM movcat WHERE idmovie = ${req.body.id}`
            sqlDB.query(sql2, (err, results) => {
                if (err) return res.status(500).send(err)

                res.status(200).send('Delete Berhasil')
            })
        })
    }
}