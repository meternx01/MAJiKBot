# MAJiKBot
Node + Express Banking Chatbot


----------
## Problem ##
**BANKING APPS ARE GARBAGE!**

You want to just transfer money, or look at account balances, and the interfaces to do those functions is ridiculous.

## Solution ##
Create a chat interface for interacting with a automated teller.  
We would provide a user with secure way to interact with a bank's automated services that are much better than working with Phone Trees and Complicated Apps.

### Technologies Planned ###

#### Front End ####

- React (*)

#### Back End ####

- Node + Express / React Router (*)
- mySQL Database - Sequelize(*)
- Deployed to IBM Cloud / Bluemix

#### Cool Stuff ####

- Watson Conversation API 
- Passport (Authentication)

### Simple Workflow ###
1. User logs into app with provided credentials
2. The Chat UI appears and prompt for input. 
3. User types in natural language the type of function they want to perform
	* Account Balance Inquiry
	* Transfer Funds
	* Bill Pay
4. User input is processed with Tone Analyzer to detect anger. An anger score is added to the context.
4. User input is processed with Natural Language Understanding. The context is enriched with detected entities and keywords (e.g., a location).
5. The input and enriched context is sent to Watson Conversation, which recognizes intent, entities, and dialog paths. It responds with a reply and/or action.
6. Action resolves or asks user for clarification

## Team Members ##


- Ashwini (Back-End and Concept Creator)
- Kriti (Front End)
- Bonnie (Back-end)
- Mariela (Lead Front End Developer)
- Jason (Coordinator / API Dude!)
