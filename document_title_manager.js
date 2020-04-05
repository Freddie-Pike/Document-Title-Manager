export const ORIGINAL_DOCUMENT_TITLE = document.title;
export const UNREAD_NOTIFICATION_CUTOFF = 100;

class DocumentTitleManager {
  constructor(newTitle = null) {
    const documentTitle = newTitle || ORIGINAL_DOCUMENT_TITLE;
    this.documentTitleWithoutNotificationCount = documentTitle.split(/^\([0-9]?[0-9]\+?\) /).pop();
  }

  updateNotificationCount(unreadNotificationCount) {
    if (unreadNotificationCount === 0) {
      document.title = this.documentTitleWithoutNotificationCount;
    } else if (unreadNotificationCount >= UNREAD_NOTIFICATION_CUTOFF) {
      document.title = `(${UNREAD_NOTIFICATION_CUTOFF - 1}+) ${
        this.documentTitleWithoutNotificationCount
      }`;
    } else {
      document.title = `(${unreadNotificationCount}) ${this.documentTitleWithoutNotificationCount}`;
    }
    return document.title;
  }
}

// window.DocumentTitleManager = new DocumentTitleManager();

// Change to replicate test.
export default DocumentTitleManager;

/**
Old document title manager.

class DocumentTitleManager {
  documentTitleWithoutNotificationCount = ORIGINAL_DOCUMENT_TITLE.split(
    /^\([0-9]?[0-9]\+?\) /,
  ).pop();

  updateNotificationCount(unreadNotificationCount) {
    if (unreadNotificationCount === 0) {
      document.title = this.documentTitleWithoutNotificationCount;
    } else if (unreadNotificationCount >= UNREAD_NOTIFICATION_CUTOFF) {
      document.title = `(${UNREAD_NOTIFICATION_CUTOFF - 1}+) ${
        this.documentTitleWithoutNotificationCount
      }`;
    } else {
      document.title = `(${unreadNotificationCount}) ${this.documentTitleWithoutNotificationCount}`;
    }
  }
}

window.DocumentTitleManager = new DocumentTitleManager();

// Change to replicate test.
export default window.DocumentTitleManager;

 */
