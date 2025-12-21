export class Project {
  constructor({ id, name, files = [], ownerId, isPublished = false, createdAt = new Date() }) {
    this.id = id;               
    this.name = name;           
    this.files = files;         
    this.ownerId = ownerId;     
    this.isPublished = isPublished; 
    this.createdAt = createdAt; 
  }
}