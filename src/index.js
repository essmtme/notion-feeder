import getNewFeedItems from './feed';
import {
  addFeedItemToNotion,
  deleteOldUnreadFeedItemsFromNotion,
} from './notion';
import htmlToNotionBlocks from './parser';

async function index() {
  const feedItems = await getNewFeedItems();

  for (let i = 0; i < feedItems.length; i++) {
    const item = feedItems[i];
    const notionItem = {
      title: item.title,
      link: item.link,
      added: item['date-added'],
      content: htmlToNotionBlocks(item.content),
    };
    const x = 'found a item';
    console.log(x);
    await addFeedItemToNotion(notionItem);
  }
  await deleteOldUnreadFeedItemsFromNotion();
}

index();
