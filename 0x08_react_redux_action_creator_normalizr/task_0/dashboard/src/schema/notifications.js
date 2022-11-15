import * as Notifications from "../../notifications.json";


export function getAllNotificationsByUser(userId){
  return Notifications.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};
