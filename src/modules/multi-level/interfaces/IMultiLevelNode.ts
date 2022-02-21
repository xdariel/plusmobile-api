export interface IMultiLevelNode {
  userId: string;
  refCode: string;
  sponsorCode: string;
  firstname: string;
  lastname?: string;
  email: string;
  username: string;
  photoFile?: {
    id: string;
    key?: string;
    url?: string;
  };

}