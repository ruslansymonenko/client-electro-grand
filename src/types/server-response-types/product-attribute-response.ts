import { IProductAttribute } from '@/types/data-types/product-attribute';
import { IAttributeValueResponse } from '@/types/server-response-types/attribute-value-response';

export interface IProductAttributeResponse extends IProductAttribute {
  attributeValue: IAttributeValueResponse;
}
