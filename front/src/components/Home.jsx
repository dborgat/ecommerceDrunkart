import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Product from "./Product";

//CARROUSEL React
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//MODAL MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

//CSS
import "./styles/Home.css";
import { getProduct } from "../redux/reducers/productReducer";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Home() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  //Carrousel function
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = products.map((product) => (
    <Product
      id={product._id}
      onDragStart={handleDragStart}
      name={product.name}
      price={product.price}
      img={product.img}
    />
  ));

  const banners = [
    <img
      className="sliderimg"
      alt=""
      src="https://lafuente.es/wp-content/uploads/2020/05/banner-ron-don-papa.jpg"
      onDragStart={handleDragStart}
    />,
    <img
      className="sliderimg"
      alt=""
      src="https://images.squarespace-cdn.com/content/v1/550169a7e4b070aead4b1079/1433071346321-FGD0IC56NALOS7APRSJ7/ke17ZwdGBToddI8pDm48kPFqfE2v07lF_amGUIcLcokUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dqS7pmytFubNbAokx3Pse_YPYHCtOQ-VcYuyXVPEkqruZDqXZYzu2fuaodM4POSZ4w/ABSOLUT_AMBER_96SHEET.jpg"
      onDragStart={handleDragStart}
    />,
    <img
      className="sliderimg"
      alt=""
      src="https://images.squarespace-cdn.com/content/v1/5c6150e04d546e3b8a4ded17/1562345308613-6XQU68RFHMY0NY9FLP03/ke17ZwdGBToddI8pDm48kEzLYSedLSGzFOX4t5uJTm4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnJ4jcPr0lK_C_XzJK4wbN16n97dhEotCkBxvF9JO0TM7IhXOqCcOtC_1HV7mqH8KMw/Alcohol-free+beer+bottle+lineup.png"
      onDragStart={handleDragStart}
    />,
    <img
      className="sliderimg"
      alt=""
      src="https://images.squarespace-cdn.com/content/v1/53e15485e4b068f76d2b172e/1437414873696-X4L82HH0OAGK2ELYO544/ke17ZwdGBToddI8pDm48kD6B0hj0pC0U_ns_mUlqmh8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcjnGyVxz4_7fGUBBocNlg5FJFs2U28j8wg_7g5x2b7zk68Qg-OIBKW5Hop4sS8Azz/image-asset.jpeg"
      onDragStart={handleDragStart}
    />,
    <img
      className="sliderimg"
      alt=""
      src="https://worldbranddesign.com/wp-content/uploads/2019/04/United-Dutch-Breweries-%7C-In-House-Design-Studio---Oranjeboom-Beers-of-the-World1.jpg"
      onDragStart={handleDragStart}
    />,
  ];

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <p>"QUE ONDA PA? TENES 18?"</p>
          <button onClick={handleClose}>Venga el liquido</button>
        </div>
      </Modal>

      <AliceCarousel
        items={banners}
        autoPlay={true}
        autoPlayInterval={2500}
        infinite={true}
        disableDotsControls={true}
      />

      <AliceCarousel
        items={items}
        responsive={responsive}
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        disableButtonsControls={true}
      />
    </div>
  );
}

export default Home;
