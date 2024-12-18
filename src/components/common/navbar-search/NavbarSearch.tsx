import { FC, useEffect, useState } from 'react';
import { useGetAllProducts } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import cn from 'clsx';
import { SERVER_URL } from '@/config/api.config';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

const NavbarSearch: FC = () => {
  const { data, isLoading, error } = useGetAllProducts();
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [foundedProducts, setFoundedProducts] = useState<IProductResponse[]>([]);

  const handleSearch = (searchValue: string): IProductResponse[] => {
    const foundedProducts: IProductResponse[] = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return foundedProducts;
  };

  const handleSetSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (data) {
      setProductsData(data.data);
    } else {
      setProductsData([]);
    }
  }, [data]);

  useEffect(() => {
    if (searchValue.length <= 0) {
      setIsSearchVisible(false);
    } else {
      const foundedProducts: IProductResponse[] = handleSearch(searchValue);

      setFoundedProducts(foundedProducts);

      setIsSearchVisible(true);
    }
  }, [searchValue]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Пошук..."
        className="xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-none text-sm transition-all shadow-lg"
        onChange={(e) => handleSetSearchValue(e)}
      />
      <div
        className={cn(
          'absolute w-full bg-white h-32 shadow-lg rounded-md left-10 top-14 p-4 overflow-y-auto' +
            ' scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-gray-200',
          isSearchVisible ? '' : 'hidden',
        )}
      >
        {foundedProducts.length ? (
          <>
            {foundedProducts.map((item, index) => (
              <Link
                className="w-full shadow-md p-2 my-2 flex h-12 justify-between"
                href={PUBLIC_URL.product(item.slug)}
              >
                <img src={`${SERVER_URL}/${item.images[0]}`} alt={item.name} />
                <p>{item.name}</p>
              </Link>
            ))}
          </>
        ) : (
          <span>Товарів не знайдено</span>
        )}
      </div>
    </div>
  );
};

export default NavbarSearch;
