Feature: Login functionality
  As a user, I want to log in to the application so that I can access my dashboard.

Scenario Outline: User login with different credentials
  Given the user is on the login page
  When the user enters "<username>" and "<password>"
  Then the user should be redirected to the dashboard

Examples:
  | username      | password     |
  | bagypedozu@mailinator.com     | password123 |
  | invalidUser   | invalidPass  |
  | anotherUser   | anotherPass  |