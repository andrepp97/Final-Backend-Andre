const express = require('express')
const { sqlDB } = require('../database')

module.exports = {
    movcat: (req, res) => {
        let sql = `SELECT m.id as idMovie, m.nama as namaMovie, c.nama as Category
                    FROM movies m
                    JOIN movcat mc ON m.id = mc.idmovie
                    JOIN category c ON c.id = mc.idcategory`

        sqlDB.query(sql, (err, results) => {
            if (err) res.status(500).send(err)

            res.status(200).send(results)
        })
    },

    getMovieName: (req, res) => {
        let sql = `SELECT distinct Nama FROM movies`
        sqlDB.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)

            res.status(200).send(results)
        })
    },

    getCategory: (req, res) => {
        let sql = `SELECT distinct Nama FROM category`
        sqlDB.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)

            res.status(200).send(results)
        })
    },

    addConnection: (req, res) => {
        let sql = `INSERT INTO movcat SET ?`
        sqlDB.query(sql, req.body, (err, results) => {
            if (err) return res.status(500).send(err)

            res.status(200).send('Berhasil Insert')
        })
    },

    deleteConnection: (req, res) => {
        let sql = `DELETE FROM movcat
                    WHERE idmovie = ${req.body.idmovie} AND idcategory = ${req.body.idcategory}`
        sqlDB.query(sql, req.body, (err, results) => {
            if (err) return res.status(500).send(err)

            res.status(200).send('Berhasil Delete')
        })
    }
}