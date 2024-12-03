const express = require('express');
const cors = require('cors');

// Создаём приложение Express
const app = express();
const port = 5000;

// Моковые данные

const auditoriums = [
    { aud_id: 1, text: '101', type: 'Лекция', count: 30 },
    { aud_id: 2, text: '102', type: 'Лаборатория', count: 20 },
    { aud_id: 3, text: '103', type: 'Лекция', count: 40 },
  ];
  
  const groups = [
    { id: 1, text: 'Группа 1' },
    { id: 2, text: 'Группа 2' },
    { id: 3, text: 'Группа 3' },
  ];
  
  const teachers = [
    { id: 1, full_name: 'Иванов И.И.' },
    { id: 2, full_name: 'Петров П.П.' },
    { id: 3, full_name: 'Сидоров С.С.' },
  ];
  
  const daysOfWeek = [
    { day_id: 1, dayofweek: 'Понедельник' },
    { day_id: 2, dayofweek: 'Вторник' },
    { day_id: 3, dayofweek: 'Среда' },
    { day_id: 4, dayofweek: 'Четверг' },
    { day_id: 5, dayofweek: 'Пятница' },
  ];
  
  const schedule = [
    // Понедельник
    { day_id: 'Понедельник', pair: 1, teacher_id: 1, name: 'Иванов И.И.', subject_name: 'Математика', group_number: 'Группа 1' },
    { day_id: 'Понедельник', pair: 2, teacher_id: 1, name: 'Иванов И.И.', subject_name: 'Физика', group_number: 'Группа 2' },
    { day_id: 'Понедельник', pair: 3, teacher_id: 1, name: 'Иванов И.И.', subject_name: 'Программирование', group_number: 'Группа 3' },
    
    // Вторник
    { day_id: 'Вторник', pair: 1, teacher_id: 2, name: 'Петров П.П.', subject_name: 'Химия', group_number: 'Группа 1' },
    { day_id: 'Вторник', pair: 2, teacher_id: 2, name: 'Петров П.П.', subject_name: 'Математика', group_number: 'Группа 2' },
    { day_id: 'Вторник', pair: 3, teacher_id: 2, name: 'Петров П.П.', subject_name: 'Программирование', group_number: 'Группа 3' },
  
    // Среда
    { day_id: 'Среда', pair: 1, teacher_id: 3, name: 'Сидоров С.С.', subject_name: 'Физика', group_number: 'Группа 1' },
    { day_id: 'Среда', pair: 2, teacher_id: 3, name: 'Сидоров С.С.', subject_name: 'Математика', group_number: 'Группа 2' },
    { day_id: 'Среда', pair: 3, teacher_id: 3, name: 'Сидоров С.С.', subject_name: 'Химия', group_number: 'Группа 3' },
  
    // Четверг
    { day_id: 'Четверг', pair: 1, teacher_id: 1, name: 'Иванов И.И.', subject_name: 'Программирование', group_number: 'Группа 1' },
    { day_id: 'Четверг', pair: 2, teacher_id: 1, name: 'Иванов И.И.', subject_name: 'Физика', group_number: 'Группа 2' },
    { day_id: 'Четверг', pair: 3, teacher_id: 1, name: 'Иванов И.И.', subject_name: 'Химия', group_number: 'Группа 3' },
  
    // Пятница
    { day_id: 'Пятница', pair: 1, teacher_id: 2, name: 'Петров П.П.', subject_name: 'Математика', group_number: 'Группа 1' },
    { day_id: 'Пятница', pair: 2, teacher_id: 2, name: 'Петров П.П.', subject_name: 'Программирование', group_number: 'Группа 2' },
    { day_id: 'Пятница', pair: 3, teacher_id: 2, name: 'Петров П.П.', subject_name: 'Физика', group_number: 'Группа 3' },
  ];

// Настройка CORS для доступа с фронтенда
app.use(cors());

// Роут для получения списка аудиторий
app.get('/api/auditoriums', (req, res) => {
  res.json(auditoriums);
});

// Роут для получения списка групп
app.get('/api/groups', (req, res) => {
  res.json(groups);
});

// Роут для получения списка преподавателей
app.get('/api/teachers', (req, res) => {
  res.json(teachers);
});

// Роут для получения списка дней недели
app.get('/api/days', (req, res) => {
  res.json(daysOfWeek);
});

// Роут для получения расписания для группы
app.get('/api/schedule/group/:groupId', (req, res) => {
  const { groupId } = req.params;
  const groupSchedule = schedule.filter(item => item.group_number === `Группа ${groupId}`);
  res.json(groupSchedule);
});

// Роут для получения расписания для преподавателя
app.get('/api/schedule/teacher/:teacherId', (req, res) => {
  const { teacherId } = req.params;
  const teacherSchedule = schedule.filter(item => item.teacher_id === parseInt(teacherId));
  res.json(teacherSchedule);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});