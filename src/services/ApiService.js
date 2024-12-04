import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

function getCategorias() {
    return apiClient.get('/categorias')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error('Error al obtener las categorías: ', err);
            throw err;
        });
}

function getCategoria(id) {
    return apiClient.get(`/categorias/${id}`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(`Error al obtener la categoría ${id}: `, err);
            throw err;
        });
}

function getProductos() {
    return apiClient.get('/productos')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(`Error al obtener los productos: `, err);
            throw err;
        });
}

function getProducto() {
    return apiClient.get(`/productos/${id}`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(`Error al obtener el producto ${id}: `, err);
        });
}

export default {
    getCategorias,
    getCategoria,
    getProductos,
    getProducto
}