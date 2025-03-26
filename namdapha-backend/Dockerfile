
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests 
# Use an official OpenJDK runtime
FROM openjdk:17.0.1-jdk-slim

COPY --from=build /target/namdapha-backend-0.0.1-SNAPSHOT.jar namdapha-backend-0.0.1-SNAPSHOT.jar

# Run the application
EXPOSE 8080
ENTRYPOINT [ "java","-jar","/namdapha-backend-0.0.1-SNAPSHOT.jar" ]