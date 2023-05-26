import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, editProduct, getAllProducts, getFeaturedProducts, getMaxProducts, getMinProducts } from "../actions/product";

const Table = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [key, setKey] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [featured, setFeatured] = useState();
  const [rating, setRating] = useState();
  const [date, setDate] = useState();
  const [company, setCompany] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(typeof(date));
    await dispatch(
      editProduct(key,id, name, price, featured, rating, date, company)
    );
    await dispatch(getAllProducts());
    await dispatch(getFeaturedProducts());
    await dispatch(getMaxProducts(50000));
    await dispatch(getMinProducts(500));

    console.log(
      id +
        " " +
        name +
        " " +
        price +
        " " +
        featured +
        " " +
        rating +
        " " +
        date +
        " " +
        company
    );
  };

  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    await dispatch(deleteProduct(id));
    await dispatch(getAllProducts());
    await dispatch(getFeaturedProducts());
    await dispatch(getMaxProducts(50000));
    await dispatch(getMinProducts(500));
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Featured
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Array.isArray(products)
                  ? products.map((item, index) => (
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {item.Product_Id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.Name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.Price}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.Featured === true ? "YES" : "NO"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.Rating} ⭐
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.Company}
                        </td>
                        <td
                          className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-green-500 hover:text-green-700"
                          onClick={async() => {
                            setId(item.Product_Id);
                            setName(item.Name);
                            setPrice(item.Price);
                            setFeatured(item.Featured);
                            setRating(item.Rating);
                            setCompany(item.Company);
                            setKey(item._id);
                            setShowModal(true);
                            
                          }}
                        >
                          Edit
                        </td>
                        {showModal ? (
                          <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                  {/*header*/}
                                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                      Edit Details
                                    </h3>
                                    <button
                                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                      onClick={() => setShowModal(false)}
                                    >
                                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                      </span>
                                    </button>
                                  </div>
                                  {/*body*/}
                                  <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleSubmit}>
                                      <div className="relative z-0 w-full mb-6 group">
                                        <input
                                          type="text"
                                          name="id"
                                          id="id"
                                        
                                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                          placeholder=" "
                                          onChange={(e) =>
                                            setId(e.target.value)
                                          }
                                          value={id}
                                          required
                                        />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                          Product Id
                                        </label>
                                      </div>
                                      <div className="relative z-0 w-full mb-6 group">
                                        <input
                                          type="text"
                                          name="name"
                                          id="name"
                                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                          placeholder=" "
                                          value={name}
                                          onChange={(e) =>
                                            setName(e.target.value)
                                          }
                                          required
                                        />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                          Name
                                        </label>
                                      </div>
                                      <div className="relative z-0 w-full mb-6 group">
                                        <input
                                          type="number"
                                          name="price"
                                          id="price"
                                          value={price}
                                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                          placeholder=" "
                                          onChange={(e) =>
                                            setPrice(e.target.value)
                                          }
                                          required
                                        />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                          Price
                                        </label>
                                      </div>
                                      <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                          <div className="flex items-center mb-4">
                                            <input
                                              id="featured"
                                              type="checkbox"
                                              value={featured}
                                              name="featured"
                                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                              onChange={(e) =>
                                                setFeatured(!featured)
                                              }
                                            />
                                            <label className="ml-2 mt-5 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                              Featured
                                            </label>
                                          </div>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                          <input
                                            type="text"
                                            name="rating"
                                            id="rating"
                                            value={rating}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            onChange={(e) =>
                                              setRating(e.target.value)
                                            }
                                            placeholder=" "
                                          />
                                          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Rating
                                          </label>
                                        </div>
                                      </div>
                                      <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                          <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={date}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            onChange={(e) =>
                                              setDate(e.target.value)
                                            }
                                            required
                                          />
                                          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Created At
                                          </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                          <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            value={company}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            onChange={(e) =>
                                              setCompany(e.target.value)
                                            }
                                            required
                                          />
                                          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Company
                                          </label>
                                        </div>
                                      </div>
                                      <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onSubmit={handleSubmit}
                                      >
                                        Submit
                                      </button>
                                    </form>
                                  </div>
                                  {/*footer*/}
                                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => setShowModal(false)}
                                    >
                                      Close
                                    </button>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </>
                        ) : null}

                        <td
                          className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-red-500 hover:text-red-700"
                          onClick={() => deleteHandler(item._id)}
                        >
                          Delete
                        </td>
                      </tr>
                    ))
                  : null}
                ;
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
