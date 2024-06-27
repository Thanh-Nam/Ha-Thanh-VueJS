// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    categories: [],
    messages: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },
    addMessage(state, message) {
      state.messages.push(message);
    },
    removeMessage(state, index) {
      state.messages.splice(index, 1);
    }
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/listCate/')
        const data = await response.json()
        commit('setCategories', data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
    addMessage({ commit }, message) {
      commit('addMessage', message);
      setTimeout(() => {
        commit('removeMessage', 0);
      }, 3000);
    }
  },
  getters: {
    getAllProducts(state) {
      let allProducts = [];
  
      state.categories.forEach(category => {
        if (category.listProduct && category.listProduct.length > 0) {
          allProducts = allProducts.concat(category.listProduct);
        }
      });
  
      return allProducts;
    },
    getProductByIdFromAllProducts: (state, getters) => (productId) => {
      const allProducts = getters.getAllProducts;
      return allProducts.find(product => product.id === productId);
    },
    allCateNames(state) {
      return state.categories.reduce((accumulator, current) => {
        return accumulator.concat(current.cateName);
      }, []);
    },
    getProductsByCateName: (state) => (cateName) => {
      const formattedCateNameRoute = cateName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
      const category = state.categories.find(category => {
        const formattedCateNameStore = category.cateName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        return formattedCateNameStore === formattedCateNameRoute;
      });
    
      if (category) {
        return {
            categoryName: category.cateName,
            products: category.listProduct
        };
      } else {
          return {
              categoryName: '',
              products: []
          };
      }
    },
    
  }
})
