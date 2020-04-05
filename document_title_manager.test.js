import DocumentTitleManager, { UNREAD_NOTIFICATION_CUTOFF } from "../document_title_manager";
import { JSDOM } from "jsdom";

// const dom = new JSDOM();
// global.document = dom.window.document;
// global.document.title = 'Project Dashboard';

// const mockUpdateNotificationCount = DocumentTitleManager.updateNotificationCount;
// const mockdocumentTitleWithoutNotificationCount = global.document.title;
// jest.mock('../document_title_manager', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       updateNotificationCount: () => {
//         let a = 'abc';
//       },
//       documentTitleWithoutNotificationCount: mockdocumentTitleWithoutNotificationCount,
//     };
//   });
// });

// Quickly having tests in multiple files.
it("Check if updateNotificationCount returns notification count", () => {
  const documentTitleManager = new DocumentTitleManager("Project Dashboard");
  const newDocumentTitle = documentTitleManager.updateNotificationCount(1);

  expect(newDocumentTitle).toBe("(1) Project Dashboard");
});

it('Check if updateNotificationCount returns "+" if >= unread notification cutoff', () => {
  const documentTitleManager = new DocumentTitleManager("Project Dashboard");
  const newDocumentTitle = documentTitleManager.updateNotificationCount(UNREAD_NOTIFICATION_CUTOFF);

  expect(newDocumentTitle).toBe("(99+) Project Dashboard");
});

it("Check if updateNotificationCount returns no count if there is no new notifications", () => {
  const documentTitleManager = new DocumentTitleManager("Project Dashboard");
  const newDocumentTitle = documentTitleManager.updateNotificationCount(0);

  expect(newDocumentTitle).toBe("Project Dashboard");
});

it("Check if splitNotificationCountFromDocumentTitle cuts off notification count", () => {
  const documentTitleManager = new DocumentTitleManager("(99+) Project Dashboard");

  expect(documentTitleManager.documentTitleWithoutNotificationCount).toBe("Project Dashboard");
});
