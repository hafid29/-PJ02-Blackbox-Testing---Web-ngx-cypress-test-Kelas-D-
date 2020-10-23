/// <reference types="cypress" />

describe("Form Testing", () => {
    it("Visit Page, Changing theme to Lightmode and Testing Inline Form", () => {
      cy.visit("/");
      cy.contains("Forms").click();
      cy.contains("Form Layouts").click();
      cy.contains("Light").click();
      cy.contains("Dark").click();
      cy.contains("nb-card", "Inline form")
        .find('[placeholder="Jane Doe"]')
        .click()
        .type("Hafid Ali Rahman Wibisana")
        .should("have.value", "Hafid Ali Rahman Wibisana");
      cy.contains("nb-card", "Inline form")
        .find('[placeholder="Email"]')
        .click()
        .type("hafidwibisana29@gmail.com")
        .should("have.value", "hafidwibisana29@gmail.com");
      cy.contains("nb-card", "Inline form").find(".custom-checkbox").click();
    });
  
    it("Testing Using the Grid", () => {
      cy.get("#inputEmail1")
        .type("hafidwibisana29@gmail.com")
        .should("have.value", "hafidwibisana29@gmail.com");
      cy.get("#inputPassword2").type("hafidwibisana").should("have.value", "hafidwibisana");
      cy.contains("Option 1").click();
    });
  
    it("Testing Basic Form", () => {
      cy.get("#exampleInputEmail1")
        .type("hafidwibisana29@gmail.com")
        .should("have.value", "hafidwibisana29@gmail.com");
      cy.get("#exampleInputPassword1")
        .type("hafidwibisana")
        .should("have.value", "hafidwibisana");
      cy.contains("Check me out").click();
    });
  
    it("Testing Form Without Labels", () => {
        cy.get('[placeholder="Recipients"]')
          .type("Hafid Ali Rahman Wibisana")
          .should("have.value", "Hafid Ali Rahman Wibisana");
        cy.get('[placeholder="Subject"]')
          .type("Tugas Black Box")
          .should("have.value", "Tugas Black Box");
        cy.get('textarea[placeholder="Message"]')
          .type("Bangun dan Semangat")
          .should("have.value", "Bangun dan Semangat");
      });
  
    it("Testing Block form", () => {
      cy.get("#inputFirstName")
        .type("Hafid Ali Rahman Wibisana")
        .should("have.value", "Hafid Ali Rahman Wibisana");
      cy.get("#inputLastName").type("Wibisana").should("have.value", "Wibisana");
      cy.get("#inputEmail")
        .type("hafidwibisana29@gmail.com")
        .should("have.value", "hafidwibisana29@gmail.com");
      cy.get("#inputWebsite")
        .type("https://github.com/hafid29/-PJ02-Blackbox-Testing---Web-ngx-cypress-test-Kelas-D-.git")
        .should("have.value", "https://github.com/hafid29/-PJ02-Blackbox-Testing---Web-ngx-cypress-test-Kelas-D-.git");
    });
  });
  