// Arquivo: user.integration.test.ts

import request from 'supertest';
import app from './app';

describe('API de materia', () => {
    it('deve criar uma nova materia corretamente', async () => {
   	// Arrange
   	const newMateria = { codigo: 'ABC123', tipo: 'OB', nome: 'Prgramação', carga_horaria: 40, esta_ativo: true, prerequisito: false, professores: [], comments: []};
  
   	// Act
   	const response = await request(app).post('/api/materia').send(newMateria);
  
  	// Assert
   	expect(response.status).toBe(201);
   	expect(response.body.codigo).toBe(newMateria.codigo);
  	expect(response.body.tipo).toBe(newMateria.tipo);
	expect(response.body.nome).toBe(newMateria.nome);
  	expect(response.body.carga_horaria).toBe(newMateria.carga_horaria);
	expect(response.body.esta_ativo).toBe(newMateria.esta_ativo);
  	expect(response.body.prerequisito).toBe(newMateria.prerequisito);
	expect(response.body.professores).toBe(newMateria.professores);
  	expect(response.body.comments).toBe(newMateria.comments);
    });

    it('deve retornar todas as materias corretamente', async () => {
        // Act
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});