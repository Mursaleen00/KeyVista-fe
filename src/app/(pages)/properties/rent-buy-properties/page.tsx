// File: app/(pages)/properties/rent-buy-properties/page.ts
// import WithSuspense from '@/components/common/suspense';

import RentAndBuyPropertiesIndex, {
  CategoryT,
} from '@/views/Properties/rent-buy-properties';

const RentPropertiesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ type: CategoryT }>;
}) => {
  const { type } = await searchParams;
  return <RentAndBuyPropertiesIndex type={type} />;
};

export default RentPropertiesPage;
