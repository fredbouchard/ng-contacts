import ContactsModule from './index';
import ContactsController from './contacts-list.controller';
import ContactsComponent from './contacts-list.component';
import ContactsTemplate from './contacts-list.html';

describe('Contacts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(ContactsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ContactsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContactsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContactsController);
    });
  });
});
