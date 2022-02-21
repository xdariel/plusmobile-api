import { Result } from 'src/shared/core/class/result';
import { IMultiLevelNode } from './IMultiLevelNode';
export interface IMultilevelService {
  getNodes(userId: string): Promise<Result<Array<IMultiLevelNode>>>;
}