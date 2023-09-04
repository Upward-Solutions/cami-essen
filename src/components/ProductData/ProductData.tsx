interface Props {
  product: Product;
}

const ProductData = ({ product }: Props) => {
  return (
    <>
      <img
        src={product.image}
        className='w-20 h-20 border border-text object-cover rounded-sm'
      />
      <div>
        <h2 className='text-headlines font-semibold'>{product.title}</h2>
        <p className='text-text text-sm'>{product.detail}</p>
      </div>
    </>
  );
};

export default ProductData;
