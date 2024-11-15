# APIDays Paris 2024

# Oracle Database 23ai demos
- Discover JSON Schema from existing JSON documents
- Validate JSON documents using JSON Schema
    - With client-side validation and optional column PRECHECK constraints (using [json-schema-form](https://github.com/remoteoss/json-schema-form) and React); use the database as a centralized _JSON Schema repository_
    - With Data Use Case Domains using JSON Schema to validate binary JSON columns
- Improve performance with [type coercion](https://github.com/json-schema-org/vocab-database/blob/main/database.md)
    - A proposal to the JSON Schema standard adding database specific vocabulary already implemented inside the Oracle database 23ai
    - Allows to encode in binary format strings or arrays of numbers into database SQL data types such as DATE, TIMESTAMP, INTERVAL, VECTOR, RAW...
- Evolve relational table model by automatically adding virtual columns from JSON fields present inside the table
    - Ideal for Analytics tools (BI, Reporting, etc.)

# Softwares
Oracle Database 23ai has a [FREE edition](oracle.com/database/free) for Windows, Linux and MAC OS (ARM). [FREE edition Docker images](https://hub.docker.com/r/gvenzl/oracle-free) are also available! Also used with the React demo, [Oracle REST Data Services](oracle.com/ords) is available for free. If you are looking for the simplest way: use an [Always FREE Autonomous Database 23ai](oracle.com/cloud/free).

# Other Labs
You can find more tutorials and labs in [Oracle LiveLabs](https://livelabs.oracle.com).

