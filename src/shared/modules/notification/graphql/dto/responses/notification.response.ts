import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { I18nMessageResponse } from './i18n-message.response';
import { SolvedEntityResponse } from 'src/shared/modules//graphql/dto/responses/solved-entity.response';
import { NotificationType } from '../../../interfaces/IAppNotificationService';

registerEnumType(NotificationType, { name: 'NotificationType' })

@ObjectType()
export class NotificationResponse {
  @Field(() => ID) id: string;

  @Field(() => I18nMessageResponse) message: I18nMessageResponse;
  @Field(() => NotificationType) type: NotificationType;
  @Field(() => Boolean) isRead: boolean;
  @Field(() => SolvedEntityResponse, { nullable: true }) toUser: SolvedEntityResponse;


  @Field(() => Date, { nullable: true }) createdAt?: Date;
  @Field(() => Date, { nullable: true }) updatedAt?: Date;
}
