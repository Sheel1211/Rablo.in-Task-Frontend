import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_PRODUCTS_REQUEST",
    });

    const { data } = await axios.get("https://rablo-in-task-backend.onrender.com/api/v1/getAll");
    console.log(data);

    dispatch({
      type: "GET_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCTS_FAILURE",
      payload: error.response.data.message,
    });
  }
};
export const getFeaturedProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_FEATURED_PRODUCTS_REQUEST",
    });

    const { data } = await axios.get("https://rablo-in-task-backend.onrender.com/api/v1/featuredProducts");
    console.log(data);

    dispatch({
      type: "GET_FEATURED_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_FEATURED_PRODUCTS_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const AddProduct =
  (id, name, price, featured, rating, date, company) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_PRODUCTS_REQUEST",
      });
    // console.log(typeof(date));
    
      const { data } = await axios.post(
        "https://rablo-in-task-backend.onrender.com/api/v1/add",
        {
          Product_Id:id,
          Name:name,
          Price:price,
          Featured:featured,
          Rating:rating,
          Created_At:date,
          Company:company,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    //   console.log(data);

      dispatch({
        type: "ADD_PRODUCTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PRODUCTS_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProduct =
  (id) => async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_PRODUCTS_REQUEST",
      });
    // console.log(typeof(date));
    
      const { data } = await axios.delete(
        `https://rablo-in-task-backend.onrender.com/api/v1/delete/${id}`,
        
      );
    //   console.log(data);

      dispatch({
        type: "DELETE_PRODUCTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "DELETE_PRODUCTS_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const editProduct =
  (key,id, name, price, featured, rating, date, company) => async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_PRODUCTS_REQUEST",
      });
    // console.log(typeof(date));
    
      const { data } = await axios.put(
        `https://rablo-in-task-backend.onrender.com/api/v1/update/${key}`,
        {
          Product_Id:id,
          Name:name,
          Price:price,
          Featured:featured,
          Rating:rating,
          Created_At:date,
          Company:company,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    //   console.log(data);

      dispatch({
        type: "UPDATE_PRODUCTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_PRODUCTS_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

  export const getMaxProducts=(maxPrice)=>async(dispatch)=>{
    try{

      dispatch({
        type:"GET_MAX_PRODUCTS_REQUEST",
      })

      const {data} = await axios.get(`https://rablo-in-task-backend.onrender.com/api/v1/fetchMaxPrice/${maxPrice}`);
      dispatch({
        type:"GET_MAX_PRODUCTS_SUCCESS",
        payload:data,
      })
    }catch(error){
      dispatch({
        type:"GET_MAX_PRODUCTS_FAILURE",
        payload:error.response.data.message
      })
    }
  }
  export const getMinProducts=(minPrice)=>async(dispatch)=>{
    try{

      dispatch({
        type:"GET_MIN_PRODUCTS_REQUEST",
      })

      const {data} = await axios.get(`https://rablo-in-task-backend.onrender.com/api/v1/fetchMinPrice/${minPrice}`);
      dispatch({
        type:"GET_MIN_PRODUCTS_SUCCESS",
        payload:data,
      })
    }catch(error){
      dispatch({
        type:"GET_MIN_PRODUCTS_FAILURE",
        payload:error.response.data.message
      })
    }
  }