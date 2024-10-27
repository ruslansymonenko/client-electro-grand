import { IAttributeValue } from '@/types/data-types/attribute-value';
import { IAttribute } from '@/types/data-types/attribute';

export interface IAttributeValueResponse extends IAttributeValue {
  attribute: IAttribute;
}
