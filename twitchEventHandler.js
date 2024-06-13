import EventEmitter from "events";

const eventEmitter = new EventEmitter();

export function emit(event) {
  for (let handler of handlers) {
    if (handler.subscriptionType == event.subscription.type) {
      eventEmitter.emit(event.subscription.type, event);
    }
  }
}

export function once(event, listener) {
  return eventEmitter.once(event, listener);
}

export function on(event, listener) {
  return eventEmitter.on(event, listener);
}

export function off(event, listener) {
  return eventEmitter.off(event, listener);
}

export function listenerCount(event, listener) {
  return eventEmitter.listenerCount(event, listener);
}

export function listeners(event) {
  return eventEmitter.listeners(event);
}

async function handle(event) {
  switch (event.subscription.type) {
    case "automod.message.hold":
      // TODO: handle
      break;
    case "automod.message.update":
      // TODO: handle
      break;
    case "automod.settings.update":
      // TODO: handle
      break;
    case "automod.terms.update":
      // TODO: handle
      break;
    case "channel.update":
      // TODO: handle
      break;
    case "channel.follow":
      // TODO: handle
      break;
    case "channel.ad_break.begin":
      // TODO: handle
      break;
    case "channel.chat.clear":
      // TODO: handle
      break;
    case "channel.chat.clear_user_messages":
      // TODO: handle
      break;
    case "channel.chat.message":
      // TODO: handle
      break;
    case "channel.chat.message_delete":
      // TODO: handle
      break;
    case "channel.chat.notification":
      // TODO: handle
      break;
    case "channel.chat_settings.update":
      // TODO: handle
      break;
    case "channel.chat.user_message_hold":
      // TODO: handle
      break;
    case "channel.chat.user_message_update":
      // TODO: handle
      break;
    case "channel.subscribe":
      // TODO: handle
      break;
    case "channel.subscription.end":
      // TODO: handle
      break;
    case "channel.subscription.gift":
      // TODO: handle
      break;
    case "channel.subscription.message":
      // TODO: handle
      break;
    case "channel.cheer":
      // TODO: handle
      break;
    case "channel.raid":
      // TODO: handle
      break;
    case "channel.ban":
      // TODO: handle
      break;
    case "channel.unban":
      // TODO: handle
      break;
    case "channel.unban_request.create":
      // TODO: handle
      break;
    case "channel.unban_request.resolve":
      // TODO: handle
      break;
    case "channel.moderate":
      // TODO: handle
      break;
    case "channel.moderator.add":
      // TODO: handle
      break;
    case "channel.moderator.remove":
      // TODO: handle
      break;
    case "channel.guest_star_session.begin":
      // TODO: handle
      break;
    case "channel.guest_star_session.end":
      // TODO: handle
      break;
    case "channel.guest_star_guest.update":
      // TODO: handle
      break;
    case "channel.guest_star_settings.update":
      // TODO: handle
      break;
    case "channel.channel_points_custom_reward.add":
      // TODO: handle
      break;
    case "channel.channel_points_custom_reward.update":
      // TODO: handle
      break;
    case "channel.channel_points_custom_reward.remove":
      // TODO: handle
      break;
    case "channel.channel_points_custom_reward_redemption.add":
      // TODO: handle
      break;
    case "channel.channel_points_custom_reward_redemption.update":
      // TODO: handle
      break;
    case "channel.poll.begin":
      // TODO: handle
      break;
    case "channel.poll.progress":
      // TODO: handle
      break;
    case "channel.poll.end":
      // TODO: handle
      break;
    case "channel.prediction.begin":
      // TODO: handle
      break;
    case "channel.prediction.progress":
      // TODO: handle
      break;
    case "channel.prediction.lock":
      // TODO: handle
      break;
    case "channel.prediction.end":
      // TODO: handle
      break;
    case "channel.suspicious_user.message":
      // TODO: handle
      break;
    case "channel.suspicious_user.update":
      // TODO: handle
      break;
    case "channel.vip.add":
      // TODO: handle
      break;
    case "channel.vip.remove":
      // TODO: handle
      break;
    case "channel.charity_campaign.donate":
      // TODO: handle
      break;
    case "channel.charity_campaign.start":
      // TODO: handle
      break;
    case "channel.charity_campaign.progress":
      // TODO: handle
      break;
    case "channel.charity_campaign.stop":
      // TODO: handle
      break;
    case "conduit.shard.disabled":
      // TODO: handle
      break;
    case "drop.entitlement.grant":
      // TODO: handle
      break;
    case "extension.bits_transaction.create":
      // TODO: handle
      break;
    case "channel.goal.begin":
      // TODO: handle
      break;
    case "channel.goal.progress":
      // TODO: handle
      break;
    case "channel.goal.end":
      // TODO: handle
      break;
    case "channel.hype_train.begin":
      // TODO: handle
      break;
    case "channel.hype_train.progress":
      // TODO: handle
      break;
    case "channel.hype_train.end":
      // TODO: handle
      break;
    case "channel.shield_mode.begin":
      // TODO: handle
      break;
    case "channel.shield_mode.end":
      // TODO: handle
      break;
    case "channel.shoutout.create":
      // TODO: handle
      break;
    case "channel.shoutout.receive":
      // TODO: handle
      break;
    case "stream.online":
      // TODO: handle
      break;
    case "stream.offline":
      // TODO: handle
      break;
    case "user.authorization.grant":
      // TODO: handle
      break;
    case "user.authorization.revoke":
      // TODO: handle
      break;
    case "user.update":
      // TODO: handle
      break;
    case "user.whisper.message":
      // TODO: handle
      break;
    default:
      console.log(`Unknown event type: ${notification.subscription.type}`);
      console.log(JSON.stringify(notification.event, null, 4));
      break;
  }
}

const EVENTS = [
  "automod.message.hold",
  "automod.message.update",
  "automod.settings.update",
  "automod.terms.update",
  "channel.update",
  "channel.follow",
  "channel.ad_break.begin",
  "channel.chat.clear",
  "channel.chat.clear_user_messages",
  "channel.chat.message",
  "channel.chat.message_delete",
  "channel.chat.notification",
  "channel.chat_settings.update",
  "channel.chat.user_message_hold",
  "channel.chat.user_message_update",
  "channel.subscribe",
  "channel.subscription.end",
  "channel.subscription.gift",
  "channel.subscription.message",
  "channel.cheer",
  "channel.raid",
  "channel.ban",
  "channel.unban",
  "channel.unban_request.create",
  "channel.unban_request.resolve",
  "channel.moderate",
  "channel.moderator.add",
  "channel.moderator.remove",
  "channel.guest_star_session.begin",
  "channel.guest_star_session.end",
  "channel.guest_star_guest.update",
  "channel.guest_star_settings.update",
  "channel.channel_points_custom_reward.add",
  "channel.channel_points_custom_reward.update",
  "channel.channel_points_custom_reward.remove",
  "channel.channel_points_custom_reward_redemption.add",
  "channel.channel_points_custom_reward_redemption.update",
  "channel.poll.begin",
  "channel.poll.progress",
  "channel.poll.end",
  "channel.prediction.begin",
  "channel.prediction.progress",
  "channel.prediction.lock",
  "channel.prediction.end",
  "channel.suspicious_user.message",
  "channel.suspicious_user.update",
  "channel.vip.add",
  "channel.vip.remove",
  "channel.charity_campaign.donate",
  "channel.charity_campaign.start",
  "channel.charity_campaign.progress",
  "channel.charity_campaign.stop",
  "conduit.shard.disabled",
  "drop.entitlement.grant",
  "extension.bits_transaction.create",
  "channel.goal.begin",
  "channel.goal.progress",
  "channel.goal.end",
  "channel.hype_train.begin",
  "channel.hype_train.progress",
  "channel.hype_train.end",
  "channel.shield_mode.begin",
  "channel.shield_mode.end",
  "channel.shoutout.create",
  "channel.shoutout.receive",
  "stream.online",
  "stream.offline",
  "user.authorization.grant",
  "user.authorization.revoke",
  "user.update",
  "user.whisper.message",
];

for (let event of EVENTS) {
  on(event, handle);
}
