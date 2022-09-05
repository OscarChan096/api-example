import { get } from "express/lib/response";
import {getConnection} from "./../commons/Connection"

const getBooks = async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books");
        res.json(result);
    }catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const getBook = async (req,res) => {
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books WHERE id = ?",id);
        res.json(result);
    }catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const getBookByAuthor = async (req, res) => {
    try{
        const {author} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books WHERE author LIKE ?",['%' + author + '%']);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const getBookByLanguage = async (req, res) => {
    try{
        const {language} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books WHERE language LIKE ?",language);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const addBook = async (req, res) => {
    try{
        const {id, title, total_pages, author, nationality, language, cover_url, editorial} = req.body;
        if(id === undefined || title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined){
            res.status(400).json({message:"error: Porfavor llenar todos los campos"});
        }

        //const book = {title,total_pages,author,nationality,language,cover_url,editorial};
        const connection = await getConnection();
        //await connection.query(); 
        const result = await connection.query("INSERT INTO books(id,title,total_pages,author,nationality,language,cover_url,editorial) VALUES (?,?,?,?,?,?,?,?)",[id,title,total_pages,author,nationality,language,cover_url,editorial]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const updateBook = async (req,res) => {
    try{
        const {id} = req.params;
        const {title, total_pages, author, nationality, language, cover_url, editorial} = req.body;
        if(title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined ){
            res.status(400).json({message:"error: porfavor llene los espacios solicitados"});
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE books SET title = ?, total_pages = ?, author = ?, nationality = ?, language = ?, cover_url = ?, editorial = ? WHERE id = ?",[title,total_pages,author,nationality,language,cover_url,editorial,id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const deleteBook = async (req,res) => {
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM books WHERE id = ?",id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getBooks,
    getBook,
    getBookByAuthor,
    getBookByLanguage,
    addBook,
    updateBook,
    deleteBook
}