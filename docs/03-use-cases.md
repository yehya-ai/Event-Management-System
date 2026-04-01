# Use Cases

## System Actors

The main actors who interact with the system are:

- Admin
- Participant

---

## Admin Use Cases

The Admin is responsible for managing the system and monitoring event activities.

### Primary Use Cases
- Create a new event
- Edit event details
- Delete an event
- View all events
- View registered participants
- Monitor event registrations

---

## Participant Use Cases

The Participant is the end user who interacts with the system to browse and register for events.

### Primary Use Cases
- View available events
- View event details
- Register for an event

---

## Simple Scope Diagram

```text
                +---------------------------+
                |   Event Management System |
                +---------------------------+

      Admin ------------------------------> Manage events
      Admin ------------------------------> View participants
      Admin ------------------------------> Monitor registrations

      Participant ------------------------> View events
      Participant ------------------------> View event details
      Participant ------------------------> Register for event
