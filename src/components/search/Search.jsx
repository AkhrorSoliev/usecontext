// rrd imports
import { Form, useActionData } from "react-router-dom";

// styles
import styles from "./Search.module.css";

// react icons
import { FcSearch } from "react-icons/fc";
import { useEffect, useState } from "react";

// action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let searchText = formData.get("search-text");
  return searchText;
};

// custom fetch
import { useFetch } from "../../hooks/useFetch";

function Search() {
  const searchText = useActionData();
  console.log(import.meta.env);
  const [url, setUrl] = useState();
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.ACCESS_KEY
    }&query=car`
  );

  console.log(data);

  useEffect(() => {
    if (searchText && searchText.trim()) {
      console.log(searchText);
    } else if (searchText != undefined) {
      alert("Please wirte something:(");
    }
  }, [searchText]);

  return (
    <div className={`${styles.search__container} container`}>
      <Form method="post" className={styles.search__form} action="">
        <input
          className={styles.search__input}
          type="text"
          name="search-text"
        />
        <button className={styles.search__button}>
          <FcSearch />
        </button>
      </Form>
    </div>
  );
}

export default Search;
